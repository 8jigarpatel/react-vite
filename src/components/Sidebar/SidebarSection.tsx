function SidebarSection(props: { text: string }) {
  const { text } = props;
  return (
    <div className="text-xs border-t-2 border-slate-200 dark:border-slate-600 uppercase font-bold pt-2 opacity-40">
      {text}
    </div>
  );
}

export default SidebarSection;
