import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar() {
    return (
        <div className="topbar" >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Delicia.</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>Chendi XIE</span>
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon"/>
                        <span>deliciaterry@gmail.com</span>
                    </div>
                </div>
                <div className="right">This is right</div>
            </div>
        </div>
    );

}

