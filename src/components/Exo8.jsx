import tw from "tailwind-styled-components";

export const Exo8 = ({children, color, textColor, borderRounding}) => {

    const CustomBtn = tw["button"]`
  border-none
  text-[20px]
  px-[30px]
  py-[15px]
  text-center
  no-underline
  block
  mx-auto
  my-[5px]
  text-blue
      ${() => `
        bg-[${color}]
        text-[${textColor}]
        rounded-[${borderRounding}]
    `}
`;

    return (
        <>
            <CustomBtn>{children}</CustomBtn>
        </>
    )
}
