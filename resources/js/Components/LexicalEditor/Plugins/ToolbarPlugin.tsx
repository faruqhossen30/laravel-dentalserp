import { Button } from '@/Components/ui/button';
import {
    $isListNode,
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND,
    ListNode,
    REMOVE_LIST_COMMAND,
} from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import axios from 'axios';
import {
    $getSelection,
    $isRangeSelection,
    CAN_REDO_COMMAND,
    CAN_UNDO_COMMAND,
    FORMAT_TEXT_COMMAND,
    REDO_COMMAND,
    SELECTION_CHANGE_COMMAND,
    UNDO_COMMAND,
} from 'lexical';
import {
    Bold,
    Image as ImageIcon,
    Italic,
    List,
    ListOrdered,
    Redo,
    Underline,
    Undo,
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { INSERT_IMAGE_COMMAND } from '../Plugins/ImagePlugin';

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isList, setIsList] = useState(false);
    const [isOrderedList, setIsOrderedList] = useState(false);

    const updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));

            const anchorNode = selection.anchor.getNode();
            const element =
                anchorNode.getKey() === 'root'
                    ? anchorNode
                    : anchorNode.getTopLevelElementOrThrow();

            if ($isListNode(element)) {
                const parentList = $getNearestNodeOfType(anchorNode, ListNode);
                const listType = parentList
                    ? parentList.getListType()
                    : element.getListType();
                setIsList(listType === 'bullet');
                setIsOrderedList(listType === 'number');
            } else {
                setIsList(false);
                setIsOrderedList(false);
            }
        }
    }, []);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateToolbar();
                });
            }),
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                (_payload, _newEditor) => {
                    updateToolbar();
                    return false;
                },
                1,
            ),
            editor.registerCommand(
                CAN_UNDO_COMMAND,
                (payload) => {
                    setCanUndo(payload);
                    return false;
                },
                1,
            ),
            editor.registerCommand(
                CAN_REDO_COMMAND,
                (payload) => {
                    setCanRedo(payload);
                    return false;
                },
                1,
            ),
        );
    }, [editor, updateToolbar]);

    const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post(
                route('admin.media.upload'),
                formData,
            );
            editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
                src: response.data.url,
                altText: file.name,
            });
        } catch (error) {
            console.error('Image upload failed', error);
            alert('Image upload failed');
        }
    };

    return (
        <div className="mb-1 flex items-center gap-1 overflow-x-auto rounded-t-md border-b bg-muted/50 p-1">
            <Button
                variant="ghost"
                size="sm"
                disabled={!canUndo}
                onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
                title="Undo"
            >
                <Undo className="h-4 w-4" />
            </Button>
            <Button
                variant="ghost"
                size="sm"
                disabled={!canRedo}
                onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
                title="Redo"
            >
                <Redo className="h-4 w-4" />
            </Button>

            <div className="mx-1 h-6 w-px bg-border" />

            <Button
                variant={isBold ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() =>
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
                }
                title="Bold"
            >
                <Bold className="h-4 w-4" />
            </Button>
            <Button
                variant={isItalic ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() =>
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
                }
                title="Italic"
            >
                <Italic className="h-4 w-4" />
            </Button>
            <Button
                variant={isUnderline ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() =>
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
                }
                title="Underline"
            >
                <Underline className="h-4 w-4" />
            </Button>

            <div className="mx-1 h-6 w-px bg-border" />

            <Button
                variant={isList ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => {
                    if (isList) {
                        editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
                    } else {
                        editor.dispatchCommand(
                            INSERT_UNORDERED_LIST_COMMAND,
                            undefined,
                        );
                    }
                }}
                title="Bullet List"
            >
                <List className="h-4 w-4" />
            </Button>
            <Button
                variant={isOrderedList ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => {
                    if (isOrderedList) {
                        editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
                    } else {
                        editor.dispatchCommand(
                            INSERT_ORDERED_LIST_COMMAND,
                            undefined,
                        );
                    }
                }}
                title="Numbered List"
            >
                <ListOrdered className="h-4 w-4" />
            </Button>

            <div className="mx-1 h-6 w-px bg-border" />

            <div className="relative">
                <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 w-9 cursor-pointer opacity-0"
                    onChange={onImageUpload}
                />
                <Button variant="ghost" size="sm" title="Upload Image">
                    <ImageIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
