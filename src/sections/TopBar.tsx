import Awards from '../components/Awards';
import Timer from '../components/Timer';

export default function TopBar({ }: {}) {

    return (
        <div className="info">
            <Awards />
            <Timer />
        </div>
    );
}