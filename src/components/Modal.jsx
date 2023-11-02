import React from "react";

export const FilterModal = ({closeModal}) => {
    return(
        <>
            <div className="modal-background fixed backdrop-brightness-50 w-full h-full z-50 flex items-center">
                <div className="modal-container w-[780px] mx-auto bg-white">
                    <button className="text-2xl" onClick={() => {
                        closeModal(false)
                    }}>x</button>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos quasi obcaecati molestiae iusto at nostrum sed cupiditate perspiciatis a consectetur culpa voluptatibus ipsam ipsum temporibus, eius aperiam sit, mollitia similique debitis? Quod mollitia sapiente, molestias laboriosam ducimus cupiditate nobis sint fugiat fugit quasi vel animi sit officia possimus similique vitae laudantium cumque quas! Rem amet maiores dolor repudiandae at numquam fugiat animi earum porro, consequatur perspiciatis debitis quidem ducimus sapiente. Blanditiis unde voluptatem maiores facere deserunt aperiam rem, ea est nihil iusto, accusamus quis autem saepe corporis magnam tempore. Iste quae assumenda voluptatem beatae ad qui in eos magni!</h1>
                </div>
            </div>
        </>
    )
}