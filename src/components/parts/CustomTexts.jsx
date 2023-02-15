export const TypingText = ({ title, textStyles }) => (
  <p className={`p-text ${textStyles ?? textStyles}`}>
    <span>{title}</span>
  </p>
);

export const TitleText = ({ title, textStyles }) => (
  <h2 className={`title-text ${textStyles ?? textStyles}`}>{title}</h2>
);
