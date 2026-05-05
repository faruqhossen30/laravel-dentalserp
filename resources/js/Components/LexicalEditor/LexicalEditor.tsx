import { LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { EditorState } from 'lexical';
import theme from './EditorTheme';
import { ImageNode } from './Nodes/ImageNode';
import ImagePlugin from './Plugins/ImagePlugin';
import ToolbarPlugin from './Plugins/ToolbarPlugin';
import './editor.css';

const editorConfig = {
    namespace: 'BlogEditor',
    theme,
    onError(error: Error) {
        console.error(error);
    },
    nodes: [ImageNode, ListNode, ListItemNode, LinkNode],
};

interface LexicalEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function LexicalEditor({ value, onChange }: LexicalEditorProps) {
    const initialConfig = {
        ...editorConfig,
        editorState: value && value.startsWith('{') ? value : undefined,
    };

    const handleOnChange = (editorState: EditorState) => {
        const jsonString = JSON.stringify(editorState.toJSON());
        onChange(jsonString);
    };

    return (
        <div className="relative rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
            <LexicalComposer initialConfig={initialConfig}>
                <ToolbarPlugin />
                <div className="relative min-h-[300px]">
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable className="editor-content min-h-[300px] p-4 outline-none" />
                        }
                        placeholder={
                            <div className="pointer-events-none absolute left-4 top-4 text-muted-foreground">
                                Start writing your blog post...
                            </div>
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <ListPlugin />
                    <LinkPlugin />
                    <ImagePlugin />
                    <OnChangePlugin onChange={handleOnChange} />
                </div>
            </LexicalComposer>
        </div>
    );
}
