"use client"

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from 'react-icons/io'
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../GlobalRedux/slices/UserSlice";

const Modal = ({ openModal, setOpenModal, title}) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()


    const handleClose = useCallback(() => {
        setOpenModal(false);
    }, [])

    const handleSubmit = () => {
        setOpenModal(false);
        console.log(name, password)
        dispatch(login({name, password}));
    }

    if (!openModal) return null;
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
                <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                    {/* CONTENT */}
                    <div className={`translate duration-300 h-full ${openModal ? 'translate-y-0' : 'translate-y-full'} ${openModal ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus-outline-none">
                            {/* HEADER */}
                            <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                                <button className="p-1 border-0 hover:opacity-70 transition absolute left-9" onClick={handleClose}>
                                    <IoMdClose size={18} />
                                </button>
                                <div className="text-lg font-semibold">
                                    {title}
                                </div>
                            </div>

                            {/* BODY */}
                            <div className="relative p-6 flex-auto">
                                <div className="relative mb-5">
                                    <input
                                        placeholder=" "
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className={`peer w-full p-4 pt-6 font-light bg-white border-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}
                                    />
                                    <label className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}>
                                        Name
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        placeholder=" "
                                        type='text'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={`peer w-full p-4 pt-6 font-light bg-white border-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}
                                    />
                                    <label className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}>
                                        Password
                                    </label>
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="flex flex-col gap-2 p-6">
                                <div className="flex flex-row items-center gap-4 w-full">
                                    <Button disabled={name.length == 0 || password.length == 0} label={'Login'} onClick={handleSubmit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal