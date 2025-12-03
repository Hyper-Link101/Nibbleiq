import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Link2, 
  Image as ImageIcon,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Code,
  Eye
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertImage = () => {
    if (imageUrl) {
      execCommand('insertHTML', `<img src="${imageUrl}" alt="Content image" style="max-width: 100%; height: auto; border-radius: 0.5rem; margin: 1rem 0;" />`);
      setImageUrl('');
      setShowImageDialog(false);
    }
  };

  const insertLink = () => {
    if (linkUrl && linkText) {
      execCommand('insertHTML', `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`);
      setLinkUrl('');
      setLinkText('');
      setShowLinkDialog(false);
    }
  };

  const formatHeading = (level: number) => {
    execCommand('formatBlock', `<h${level}>`);
  };

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="border border-slate-200 rounded-lg p-2 bg-slate-50">
        <div className="flex flex-wrap gap-1">
          {/* Text Formatting */}
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => execCommand('bold')}
            title="Bold"
          >
            <Bold className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => execCommand('italic')}
            title="Italic"
          >
            <Italic className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => execCommand('underline')}
            title="Underline"
          >
            <Underline className="w-4 h-4" />
          </Button>

          <div className="w-px h-8 bg-slate-300 mx-1" />

          {/* Headings */}
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => formatHeading(1)}
            title="Heading 1"
          >
            <Heading1 className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => formatHeading(2)}
            title="Heading 2"
          >
            <Heading2 className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => formatHeading(3)}
            title="Heading 3"
          >
            <Heading3 className="w-4 h-4" />
          </Button>

          <div className="w-px h-8 bg-slate-300 mx-1" />

          {/* Lists */}
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => execCommand('insertUnorderedList')}
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => execCommand('insertOrderedList')}
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </Button>

          <div className="w-px h-8 bg-slate-300 mx-1" />

          {/* Quote & Code */}
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => execCommand('formatBlock', '<blockquote>')}
            title="Quote"
          >
            <Quote className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => execCommand('formatBlock', '<pre>')}
            title="Code Block"
          >
            <Code className="w-4 h-4" />
          </Button>

          <div className="w-px h-8 bg-slate-300 mx-1" />

          {/* Insert Link */}
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => setShowLinkDialog(true)}
            title="Insert Link"
          >
            <Link2 className="w-4 h-4" />
          </Button>

          {/* Insert Image */}
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => setShowImageDialog(true)}
            title="Insert Image"
          >
            <ImageIcon className="w-4 h-4" />
          </Button>

          <div className="w-px h-8 bg-slate-300 mx-1" />

          {/* Preview */}
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => setShowPreview(!showPreview)}
            title="Toggle Preview"
            className={showPreview ? 'bg-orange-100 text-orange-700' : ''}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Image Dialog */}
      {showImageDialog && (
        <Card className="p-4 border-2 border-orange-200">
          <Label className="mb-2 block">Insert Image URL</Label>
          <div className="flex gap-2">
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              onKeyPress={(e) => e.key === 'Enter' && insertImage()}
            />
            <Button type="button" onClick={insertImage}>Insert</Button>
            <Button type="button" variant="outline" onClick={() => setShowImageDialog(false)}>Cancel</Button>
          </div>
        </Card>
      )}

      {/* Link Dialog */}
      {showLinkDialog && (
        <Card className="p-4 border-2 border-orange-200">
          <Label className="mb-2 block">Insert Link</Label>
          <div className="space-y-2">
            <Input
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="Link text"
            />
            <Input
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              onKeyPress={(e) => e.key === 'Enter' && insertLink()}
            />
            <div className="flex gap-2">
              <Button type="button" onClick={insertLink}>Insert</Button>
              <Button type="button" variant="outline" onClick={() => setShowLinkDialog(false)}>Cancel</Button>
            </div>
          </div>
        </Card>
      )}

      {/* Editor */}
      {!showPreview ? (
        <div
          ref={editorRef}
          contentEditable
          className="min-h-[300px] border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: value }}
          onInput={(e) => onChange(e.currentTarget.innerHTML)}
          style={{ 
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word'
          }}
        />
      ) : (
        <div className="min-h-[300px] border border-slate-200 rounded-lg p-4 bg-slate-50">
          <div className="mb-2 text-xs text-slate-500 uppercase tracking-wide">Preview</div>
          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-a:text-orange-600 prose-strong:text-slate-900 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      )}

      <p className="text-xs text-slate-500">
        Use the toolbar to format your content. Click the eye icon to preview how it will look.
      </p>
    </div>
  );
}
