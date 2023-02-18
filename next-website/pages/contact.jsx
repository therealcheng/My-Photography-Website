import NavbarNext from '@/components/NavbarNext';

const Contact = () => {
  return (
    <>
      <NavbarNext />
      <div className='flex justify-center py-8'>
        <input
          type='text'
          placeholder='Type here'
          class='input input-bordered input-primary w-full max-w-xs'
        />
      </div>
    </>
  );
};

export default Contact;
