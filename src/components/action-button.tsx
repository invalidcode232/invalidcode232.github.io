import { motion } from "framer-motion";

interface ActionButtonProps {
    text: string;
    href: string;
    icon?: React.ReactNode;
}

export default function ActionButton({ text, href, icon }: ActionButtonProps) {
    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-slate-700 text-white px-6 py-2 rounded-md md:min-w-[200px] min-w-full hover:bg-slate-600 hover:cursor-pointer flex items-center justify-center mb-3 md:mb-0"
            onClick={() => window.open(href, "_blank")}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </motion.button>
    );
}
