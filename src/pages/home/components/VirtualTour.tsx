export default function VirtualTour() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full">
        <div className="aspect-[16/9] w-full">
          <iframe
            src="https://my.matterport.com/show/?m=NUpWzUwWfMQ"
            className="w-full h-full border-0"
            allowFullScreen
            title="Virtual Tour"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
