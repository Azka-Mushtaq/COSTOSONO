// useDelete.js
import { useState } from 'react';

const useDelete = (url) => {
    const [error, setError] = useState(null);
    const [successMessage, setsuccessMessage] = useState("");

    const deleteProduct = async (id) => {
        setError(null);

        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error("Error while deleted product");
            }

            setsuccessMessage("Product successfully Deleted");
        } catch (err) {
            setError(err.message);
        } 
    };

    return { deleteProduct, successMessage };
};

export default useDelete;
