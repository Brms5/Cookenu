import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

function AddRecipesPage() {
    useProtectedPage();

    return (
        <div>AddRecipesPage</div>
    )
}

export default AddRecipesPage;