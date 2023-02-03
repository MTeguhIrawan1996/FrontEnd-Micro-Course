export const TypingText = ({ title, textStyles }) => (
  <p
    className={`font-medium text-[16px] text-secondary-black ${
      textStyles ? textStyles : ""
    }`}
  >
    <span>{title}</span>
  </p>
);

export const TitleText = ({ title, textStyles }) => (
  <h2
    className={`md:text-[42px] text-[34px] md:text-start text-center text-white font-semibold ${
      textStyles ? textStyles : ""
    }`}
  >
    {title}
  </h2>
);
