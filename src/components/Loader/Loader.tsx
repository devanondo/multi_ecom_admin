import { Spin } from 'antd';
import './Loader.scss';

const Loader = () => {
    return (
        <div className="loader__spin">
            <Spin />
        </div>
    );
};

export default Loader;
