import React from 'react';
import styles from './pagination.module.css'

function Pagination({ arrPages, currentPage, totalPages, handleClick }) {
    const noShow = totalPages === 0
    const first = currentPage === 1
    const last = currentPage === totalPages

    return (
        <section className={styles.container}>
            <button key='back' id='back'
                onClick={() => handleClick('back')}
                className={noShow || first ? styles.noShow : styles.button} >{'<'}</button>

            {arrPages?.map((page) => (
                <button key={`page${page}`}
                    onClick={() => handleClick(page)}
                    className={page === currentPage ? styles.currentPage : styles.button}> {page} </button>
            ))}

            <button key='next' id='next'
                disabled={currentPage === totalPages}
                onClick={() => handleClick('next')}
                className={noShow || last ? styles.noShow : styles.button} >{'>'}</button >
        </section >
    )
}

export default Pagination