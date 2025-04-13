import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from '../../../components/PagesComponents/Tiptap/MenuBar';

// define your extension array
const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

const PrivacyPolicy = () => {
    const editor = useEditor({
        extensions,
        content,
        editorProps: {
            attributes: {
                class: 'min-h-[156px] rounded-md bg-slate-50 py-2 px-3',
            }
        }
    })
    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default PrivacyPolicy;