type CardProps = {
  subtitle: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ subtitle, title, description }) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            {subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            React State Management Examples
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This is a collection of simple example codes using the numerous
            state management libraries available for React.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <Card
            subtitle="State management using vanilla React"
            title="React's useState & useContext"
            description="Learn how to manage state using React's core techniques."
          />
          <Card
            subtitle="Redux Architecture"
            title="Redux Toolkit"
            description="Introducing the official toolkit for reducing Redux boilerplate and achieving efficient state management."
          />
          <Card
            subtitle="GraphQL Client"
            title="Apollo Client"
            description="Explore a powerful client library for fetching and managing data using GraphQL."
          />
          <Card
            subtitle="Data Fetching & Synchronization"
            title="react-query"
            description="A library for data fetching, caching, and synchronization."
          />
          <Card
            subtitle="Minimalistic State Management"
            title="zustand"
            description="Explore a library aiming for a simple API and flexible state management."
          />
          <Card
            subtitle="Atomic State Management"
            title="jotai"
            description="Introducing a library for atomic state management, learn how to efficiently manage finely divided states."
          />
        </div>
      </div>
    </section>
  );
};

export default App;
