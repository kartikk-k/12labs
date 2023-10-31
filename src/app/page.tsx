import Crafts from '@/components/Crafts'
import Navbar from '@/components/Navbar'
import Searchbar from '@/components/Searchbar'

function Home() {
  return (
    <div className='p-4 py-8'>
      {/* navbar */}
      <Navbar />

      <section className='space-y-10'>
        {/* hero */}
        <div className='space-y-2 mt-20'>
          <h1 className='text-2xl text-primary font-bold'>12 Labs</h1>
          <p className='text-gray-500 max-w-sm'>Sharing beautifully crafted front-end components for web.</p>
        </div>

        {/* search bar */}
        <Searchbar />

        {/* components */}
        <Crafts />

      </section>
    </div>
  )
}

export default Home