interface NavigationButtonProps {
  section: 'quizz' | 'class';
  isActive: boolean;
  onClick: () => void;
}

export const NavigationButton = ({ section, isActive, onClick }: NavigationButtonProps) => {
  const baseClasses = 'text-white px-6 py-3 rounded-md transition-all duration-200 text-lg font-medium border-2';
  const sectionClasses = section === 'quizz' 
    ? 'bg-quizzPrimary-500 hover:bg-quizzPrimary-300 border-quizzPrimary-500' 
    : 'bg-classPrimary-500 hover:bg-classPrimary-300 border-classPrimary-500';
  const activeClasses = isActive 
    ? `bg-${section}Primary-200 text-${section}Primary-900 rounded-t-md scale-110 transform shadow-lg translate-y-[10px] z-10` 
    : 'scale-95 transform rounded-md';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sectionClasses} ${activeClasses}`}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </button>
  );
};
