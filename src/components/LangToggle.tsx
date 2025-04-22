import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const LangToggle:FC = () => {
  const { i18n } = useTranslation();
  const toggle = () => i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');

  return (
    <button
      onClick={toggle}
      className="ml-4 font-semibold hover:text-yellow-400"
    >
      {i18n.language === 'pt' ? 'EN' : 'PT'}
    </button>
  );
};

export default LangToggle;