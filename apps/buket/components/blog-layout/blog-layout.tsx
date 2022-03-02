import { JsxElement } from 'typescript';
import Alert from '../alert/alert';
/* eslint-disable-next-line */
export interface BlogLayoutProps {
  preview: boolean;
  children?: React.ReactChild | React.ReactChild[];
  // children?: React.ReactNode; This seems to be the best option
  // children: JSX.Element | JSX.Element[] | string | string[];
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
