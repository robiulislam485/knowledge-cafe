import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex items-center justify-between border-b-2 mx-10 mt-4'>
            <h1 className="text-3xl font-bold mb-10">Knowledge Cafe</h1>
            <img className='mb-10' src={profile} alt="" />
        </div>
    );
};

export default Header;