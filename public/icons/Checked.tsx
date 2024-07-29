export default function Checked({ width, height }: { width: number; height: number }) {
	return (
		<svg width={width} height={height} viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_362_52909)">
				<rect x="14" y="14" width="48" height="48" rx="12" fill="#1E293B" />
				<rect x="14.5" y="14.5" width="47" height="47" rx="11.5" stroke="#F8FAFC" strokeOpacity="0.1" />
			</g>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M40.8536 28.4825C39.3295 27.1712 37.0757 27.1712 35.5516 28.4825C34.8932 29.0489 34.0708 29.3896 33.2047 29.4546C31.1998 29.6051 29.6061 31.1988 29.4556 33.2037C29.3906 34.0698 29.0499 34.8922 28.4835 35.5506C27.1722 37.0747 27.1722 39.3285 28.4835 40.8527C29.0499 41.511 29.3906 42.3334 29.4556 43.1995C29.6061 45.2044 31.1998 46.7982 33.2047 46.9486C34.0708 47.0136 34.8932 47.3543 35.5516 47.9207C37.0757 49.232 39.3295 49.232 40.8536 47.9207C41.512 47.3543 42.3344 47.0136 43.2005 46.9486C45.2054 46.7982 46.7991 45.2044 46.9496 43.1995C47.0146 42.3334 47.3553 41.511 47.9217 40.8527C49.233 39.3285 49.233 37.0747 47.9217 35.5506C47.3553 34.8922 47.0146 34.0698 46.9496 33.2037C46.7991 31.1988 45.2054 29.6051 43.2005 29.4546C42.3344 29.3896 41.512 29.0489 40.8536 28.4825ZM43.5388 35.9542C43.9545 35.4924 43.917 34.7811 43.4552 34.3654C42.9934 33.9498 42.2821 33.9872 41.8664 34.449L37.1909 39.6441L34.4228 37.3374C33.9455 36.9396 33.2361 37.0041 32.8384 37.4814C32.4406 37.9587 32.5051 38.6681 32.9824 39.0659L36.3606 41.881C36.9489 42.3713 37.8197 42.3088 38.332 41.7396L43.5388 35.9542Z"
				fill="url(#paint0_linear_362_52909)"
			/>
			<defs>
				<filter id="filter0_d_362_52909" x="0" y="0" width={width} height={height} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
					<feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_362_52909" />
					<feOffset />
					<feGaussianBlur stdDeviation="6" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_362_52909" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_362_52909" result="shape" />
				</filter>
				<linearGradient id="paint0_linear_362_52909" x1="27.5" y1="38.2016" x2="48.9052" y2="38.2016" gradientUnits="userSpaceOnUse">
					<stop stopColor="#10B981" />
					<stop offset="1" stopColor="#A3E635" />
				</linearGradient>
			</defs>
		</svg>
	);
}
