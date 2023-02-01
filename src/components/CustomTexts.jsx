export const TypingText = ({ title, textStyles }) => (
  <p
    className={`font-medium text-[16px] text-zinc-500 ${
      textStyles ? textStyles : ""
    }`}
  >
    <span>{title}</span>
  </p>
);

export const TitleText = ({ title, textStyles }) => (
  <h2
    className={`font-semibold md:text-[42px] text-[34px] md:text-start text-center text-white ${
      textStyles ? textStyles : ""
    }`}
  >
    {title}
  </h2>
);
