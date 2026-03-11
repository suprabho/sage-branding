"use client";

export type Tab = "app" | "email" | "rationale";

const tabs: { id: Tab; label: string }[] = [
  { id: "app", label: "App Preview" },
  { id: "email", label: "Email Preview" },
  { id: "rationale", label: "Rationale" },
];

interface TabBarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="flex gap-1 border-b border-[var(--color-neutral-mid)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-5 py-3 text-sm font-medium transition-all duration-200 relative cursor-pointer
              ${isActive
                ? "text-[var(--color-primary)]"
                : "text-[var(--color-neutral-dark)]/60 hover:text-[var(--color-neutral-dark)]"
              }
            `}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {tab.label}
            {isActive && (
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
