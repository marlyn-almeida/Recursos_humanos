// src/components/AnimatedCard.js
import { motion } from "framer-motion";

const AnimatedCard = ({ title, description }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-5 bg-white shadow-lg rounded-lg"
        >
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default AnimatedCard;
