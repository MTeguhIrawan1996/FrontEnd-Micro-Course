export const TypingText = ({ title, textStyles }) => (
  <p className={`font-semibold text-[16px] text-secondary-white ${textStyles}`}>
    <span>{title}</span>
  </p>
);

export const TitleText = ({ title, textStyles }) => (
  <h2
    className={`${textStyles} font-semibold md:text-[42px] text-[34px] md:text-start text-center text-white`}
  >
    {title}
  </h2>
);
