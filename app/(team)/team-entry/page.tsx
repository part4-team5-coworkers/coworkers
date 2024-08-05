/* eslint-disable no-restricted-syntax */

"use client";

import API from "@/app/_api";
import Form from "@/app/_components/Form";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback } from "react";

type FormContext = Parameters<Parameters<typeof Form>[0]["onSubmit"]>[0];

function TeamEntryForm() {
	const type = useSearchParams().get("type");

	const imageUpload = async (file: File) => {
		if (typeof file === "string") {
			return { url: undefined };
		}

		const response = await API["{teamId}/images/upload"].POST({}, file);

		return response;
	};

	const teamManagementMutation = useMutation<{}, Error, FormContext>({
		mutationFn: async (ctx: FormContext) => {
			const formData = new FormData();
			for (const [key, value] of Object.entries(ctx.values)) {
				formData.append(key, value as string);
			}

			const file = formData.get("profileImage") as File;
			const teamName = formData.get("teamName") as string;

			const { url } = await imageUpload(file);

			const payload: Parameters<(typeof API)["{teamId}/groups"]["POST"]>[1] = {
				image: url,
				name: teamName,
			};

			const response = await API["{teamId}/groups"].POST({}, payload);

			return response;
		},
		onSuccess: (data) => {
			// TODO: 팀 생성 성공 시 팀 페이지로 이동
			console.log("Success: ", data);
		},
		onError: (error) => {
			console.log("Error: ", error);
			// TODO: 팀 생성 실패 시 에러 메시지 표시
		},
	});

	const handleTeamManagement = useCallback(
		(ctx: FormContext) => {
			if (teamManagementMutation.status === "pending") return;

			teamManagementMutation.mutate(ctx);
		},
		[teamManagementMutation],
	);

	return (
		<main className="h-dvh min-w-[320px] bg-background-primary text-text-default">
			<section className="flex size-full flex-col items-center justify-center">
				{type === "join" ? (
					<>
						<div className="pb-20">
							<h1 className="text-[40px] font-medium leading-[48px] text-white">팀 참여하기</h1>
						</div>

						<div className="w-full">
							<Form onSubmit={() => console.log("앵")}>
								<div className="mx-auto flex w-full max-w-[340px] flex-col tablet:max-w-[460px]">
									<label htmlFor="teamUrl" className="w-full pb-3 text-start text-text-primary">
										팀 링크
									</label>
									<Form.Input id="teamUrl" type="text" placeholder="팀 링크를 입력하세요" />
									<Form.Error htmlFor="teamUrl" />

									<div className="pt-10" />

									<div className="h-12">
										<Form.Submit>참여하기</Form.Submit>
									</div>
								</div>
							</Form>
						</div>

						<div className="max-w-[340px] pt-6 tablet:max-w-[460px]">
							<p className="text-md font-normal text-text-primary tablet:text-lg">공유받은 팀 링크를 입력해 참여할 수 있어요.</p>
						</div>
					</>
				) : (
					<>
						<div className="pb-20">
							{type === "edit" ? (
								<h1 className="text-[40px] font-medium leading-[48px] text-white">팀 수정하기</h1>
							) : (
								<h1 className="text-[40px] font-medium leading-[48px] text-white">팀 생성하기</h1>
							)}
						</div>

						<div className="w-full">
							<Form onSubmit={handleTeamManagement}>
								<div className="mx-auto flex w-full max-w-[340px] flex-col tablet:max-w-[460px]">
									<label htmlFor="team-image" className="w-full pb-3 text-start text-text-primary">
										팀 프로필
									</label>
									<Form.ImageInput id="profileImage" tests={[{ type: "file_size", data: 1048576, error: "이미지 파일 크기는 1MB 이하여야 합니다" }]}>
										{(file) => (
											// eslint-disable-next-line react/jsx-no-useless-fragment
											<>
												{file ? (
													<div className="relative flex size-16 items-center justify-center rounded-[12px] border-2 border-border-primary/10">
														<Image src={file as string} alt="Profile Preview" fill className="rounded-[12px] object-cover object-center" />
														<div className="relative size-full">
															<Image src="/icons/editIcon.svg" alt="Profile Preview" width={20} height={20} className="absolute -bottom-2 -right-2" />
														</div>
													</div>
												) : (
													<div className="relative flex size-16 items-center justify-center rounded-[12px] border-2 border-border-primary/10 bg-background-secondary">
														<div className="relative size-5">
															<Image src="/icons/imageIcon.svg" alt="Profile Preview" fill />
														</div>

														<Image src="/icons/editIcon.svg" alt="Profile Preview" width={20} height={20} className="absolute -bottom-2 -right-2" />
													</div>
												)}
											</>
										)}
									</Form.ImageInput>
									<Form.Error htmlFor="team-image" />

									<div className="pt-6" />

									<label htmlFor="team-name" className="w-full pb-3 text-start text-text-primary">
										팀 이름
									</label>
									<Form.Input
										id="teamName"
										type="text"
										placeholder="팀 이름을 입력하세요"
										tests={[{ type: "require", data: true, error: "팀 이름은 필수입니다" }]}
									/>
									<Form.Error htmlFor="team-name" />

									<div className="pt-10" />

									<div className="h-12">
										<Form.Submit>생성하기</Form.Submit>
									</div>
								</div>
							</Form>
						</div>

						<div className="max-w-[340px] pt-6 tablet:max-w-[460px]">
							<p className="text-md font-normal text-text-primary tablet:text-lg">팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.</p>
						</div>
					</>
				)}
			</section>
		</main>
	);
}

export default function TeamEntryPage() {
	return (
		<Suspense>
			<TeamEntryForm />
		</Suspense>
	);
}
