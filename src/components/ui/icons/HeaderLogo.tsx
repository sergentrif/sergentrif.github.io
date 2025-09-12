import { IconProps } from "./types";

export const HeaderLogo: React.FC<IconProps> = ({
  width = 40,
  height = 33,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1276 2.54001L13.1276 28.94H19.3676L22.1287 19.82L25.9676 7.14001H26.4476L30.2632 19.82L33.0076 28.94H39.2876L30.2876 2.54001H22.1276Z"
        fill="#000F1A"
      />
      <path
        d="M0 31.9164L11.4639 0.799789L16.8164 1.08364L5.35248 32.2002L0 31.9164Z"
        fill="#000F1A"
      />
    </svg>
  );
};
