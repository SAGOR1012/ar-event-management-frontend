import HeadingTitle from '../Heading_Title/HeadingTitle';
import { Link } from 'react-router-dom';
import UseAllTrend from '../../hooks/UseAllTrend';

const EventCategories = () => {
  // const url = '../../../public/fackData.json';
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`${url}`)
  //     .then((res) => res.json())
  //     .then((jsonData) => setData(jsonData));
  // }, [url]);

  const [events] = UseAllTrend();
  const limitedData = events.slice(0, 3);

  return (
    <div
      className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'
      style={{ backgroundColor: 'var(--primary-bg-color)' }}>
      {/* Header Section - Minimal & Editorial */}
      <div
        className='border-b pb-6 mb-10'
        style={{ borderColor: 'var(--span-color)' }}>
        <div>
          <HeadingTitle title={'EXCLUSIVE SPACES'} />
        </div>

        <div className='flex justify-between items-end'>
          <h2>
            <HeadingTitle heading={'Featured Categories'} />
          </h2>
          <button
            className='text-sm font-medium pb-0.5 hover:opacity-70 transition'
            style={{
              color: 'var(--primary-color)',
              borderBottomColor: 'var(--primary-color)',
              borderBottomWidth: '1px',
            }}>
            Explore All →
          </button>
        </div>
      </div>

      {/* Minimal Grid Layout - Reduced Image Sizes */}
      <div className='grid md:grid-cols-12 gap-6'>
        {/* LEFT BIG CARD - Reduced height */}
        <div className='md:col-span-7 group'>
          <Link to={`/event-details`}>
            <div
              className='relative overflow-hidden rounded-sm h-[380px]'
              style={{ backgroundColor: 'var(--span-color)' }}>
              <img
                src={limitedData[0]?.image}
                alt={limitedData[0]?.name}
                className='w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out'
              />
              {/* Minimal overlay - lighter gradient */}
              <div className='absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/90 via-transparent to-transparent'></div>

              {/* Minimal text treatment */}
              <div className='absolute bottom-0 left-0 right-0 p-5'>
                <h3
                  className='text-2xl font-light tracking-wide'
                  style={{ color: 'var(--primary-bg-color)' }}>
                  {limitedData[0]?.name}
                </h3>
                <p
                  className='text-xs uppercase tracking-wider mt-1'
                  style={{ color: 'var(--span-color)' }}>
                  {limitedData[0]?.description?.substring(0, 80)}...
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT SIDE - Two stacked cards with smaller images */}
        <div className='md:col-span-5 space-y-6'>
          {limitedData.slice(1).map((event, idx) => (
            <Link
              to={`/event-details`}
              key={event.id}>
              <div className='group'>
                <div
                  className='relative overflow-hidden rounded-sm h-[182px]'
                  style={{ backgroundColor: 'var(--span-color)' }}>
                  <img
                    src={event.image}
                    alt={event.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out'
                  />
                  {/* Minimal overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/90 via-transparent to-transparent'></div>

                  {/* Minimal text - smaller typography */}
                  <div className='absolute bottom-0 left-0 right-0 p-4'>
                    <h3
                      className='text-lg font-light tracking-wide'
                      style={{ color: 'var(--primary-bg-color)' }}>
                      {event.name}
                    </h3>
                    <p
                      className='text-xs uppercase tracking-wider mt-0.5'
                      style={{ color: 'var(--span-color)' }}>
                      {idx === 0
                        ? 'Orchestrating timeless unions'
                        : 'Curated experiences'}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Minimal Footer / Pulse Section */}
      <div
        className='mt-12 pt-8 border-t'
        style={{ borderColor: 'var(--span-color)' }}></div>
    </div>
  );
};

export default EventCategories;
