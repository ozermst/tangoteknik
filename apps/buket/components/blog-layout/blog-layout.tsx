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
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default BlogLayout;
