import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

export const AboutEditButton = () => {
    return (
        <div>
            <button
                type="button"
                class="btn-sm px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3 mt-3"
            >
                <PencilIcon className="w-4 inline mr-2" />
                Edit
            </button>
            
        </div>
    );
};
