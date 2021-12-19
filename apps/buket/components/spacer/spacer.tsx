/* eslint-disable-next-line */
export interface SpacerProps {
  height: string;
}

export function Spacer({ height }: SpacerProps) {
  return (
    <div>
      <style jsx>{`
        div {
          height: ${height};
        }
      `}</style>
    </div>
  );
}

export default Spacer;
