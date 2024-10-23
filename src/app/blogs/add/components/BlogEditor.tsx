"use client"

import React from 'react'
import { EditorContent, useEditor, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FaCode, FaListUl, FaListOl } from 'react-icons/fa6'
import { GrUndo, GrRedo, GrBlockQuote, GrBold } from "react-icons/gr";
import { MdOutlineHorizontalRule, MdOutlineFormatItalic } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { LuHeading1, LuHeading2, LuHeading3, LuStrikethrough } from "react-icons/lu";
import { RiText } from "react-icons/ri";
import './styles.scss'

type MenuBarProps = {
    editor: Editor | null;
};


const MenuBar = ({ editor }: MenuBarProps) => {
    if (!editor) {
        return null
    }

    return (
        <div className="control-group mt-10">
            <div className="button-group flex gap-6 justify-center text-lg max-sm:text-sm max-sm:gap-3 transition-all">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`${editor.isActive('bold') ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <GrBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`${editor.isActive('italic') ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <MdOutlineFormatItalic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`${editor.isActive('strike') ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <LuStrikethrough />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className={`${editor.isActive('code') ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <FaCode />
                </button>

                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`${editor.isActive('paragraph') ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <RiText />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <LuHeading1 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <LuHeading2 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <LuHeading3 />
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`${editor.isActive('bulletList') ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <FaListUl />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`${editor.isActive('orderedList') ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <FaListOl />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`${editor.isActive('codeBlock') ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <BiCodeBlock />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`${editor.isActive('blockquote') ? 'is-active' : ''} hover:scale-110 duration-200`}
                >
                    <GrBlockQuote />
                </button>

                <button
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className='hover:scale-110 duration-200'
                >
                    <MdOutlineHorizontalRule />
                </button>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    className='hover:scale-110 duration-200'
                >
                    <GrUndo />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    className='hover:scale-110 duration-200'
                >
                    <GrRedo />
                </button>
            </div>
        </div>
    )
}

type BlogEditorProps = {
    setContent: (content: string) => void;
};

export default function BlogEditor({ setContent }: BlogEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit
        ],
        content: "Start writing here...",
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML())
        },
        editorProps: {
            attributes: {
                spellcheck: 'true',
                class: 'border-none outline-none'
            },
        },
        immediatelyRender: false,
    })

    return (
        <>
            <MenuBar editor={editor} />
            <div className="editor-container">
                <EditorContent editor={editor} className='py-3 mt-5' />
            </div>
        </>
    )
}