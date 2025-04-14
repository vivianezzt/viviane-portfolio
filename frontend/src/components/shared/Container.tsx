export interface ConatinerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container(props: ConatinerProps) {
    return(
        <div className={`max-w-7xl mx-auto ppx-4 ${props.className ?? ""}`}>
            {props.children}
        </div>
    )
}