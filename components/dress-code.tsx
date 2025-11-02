const DressCode = () => {
  const colors = [
    { name: "Cream", color: "hsl(40, 30%, 96%)" },
    { name: "Beige", color: "hsl(30, 20%, 88%)" },
    { name: "Brown", color: "hsl(25, 20%, 35%)" },
    { name: "Dark", color: "hsl(20, 25%, 20%)" },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-4xl text-foreground font-great-vibes mb-6">
          Dress code
        </h2>

        <p className="font-serif text-sm text-muted-foreground mb-2">
          The wedding theme is
        </p>

        {/* Color Swatches */}
        <div className="flex justify-center gap-4 mb-8">
          {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 shadow-md"
                style={{ backgroundColor: color.color }}
              ></div>
            </div>
          ))}
        </div>

        <p className="font-serif text-sm text-muted-foreground italic">
          What is expected for the bride =<br />
          Thank you for understanding!
        </p>
      </div>
    </section>
  );
};

export default DressCode;
