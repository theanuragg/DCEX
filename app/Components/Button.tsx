"use client";

export const PrimaryButton = ({ children, onClick }: { 
  children: React.ReactNode; 
  onClick: () => void;
}) => {
  return (
    <button 
      onClick={onClick}
      type="button" 
      className="text-white bg-[var(--color-primary)] hover:bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-[var(--color-secondary)] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick, prefix }: { 
  children: React.ReactNode; 
  onClick: () => void; 
  prefix?: React.ReactNode;
}) => {
  return (
    <button 
      onClick={onClick} 
      type="button" 
      className="text-white bg-[var(--color-secondary)] hover:bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 flex"
    >
      <div>{prefix}</div>
      <div>{children}</div>
    </button>
  );
};

export const TabButton = ({ active, children, onClick }: { 
  active: boolean; 
  children: React.ReactNode; 
  onClick: () => void;
}) => {
  return (
    <button 
      type="button" 
      className={`w-full text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
        active ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)] hover:bg-opacity-80"
      }`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};
