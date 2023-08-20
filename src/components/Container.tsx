type ContainerProps = {
  styles: React.CSSProperties;
};

export default function Container(props: ContainerProps) {
  return (
    <div>
      <p style={props.styles}> Text content goes here</p>
    </div>
  );
}
