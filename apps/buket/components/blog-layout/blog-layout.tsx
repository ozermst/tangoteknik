import { JsxElement } from 'typescript';
import Alert from '../alert/alert';
/* eslint-disable-next-line */
export interface BlogLayoutProps {
  preview: boolean;
  children: JSX.Element | JSX.Element[];
}

export function BlogLayout({ preview, children }: BlogLayoutProps) {
  return (
    <>
      <div className="blogLayout">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <style jsx>{`
        .blogLayout {
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}

export default BlogLayout;
