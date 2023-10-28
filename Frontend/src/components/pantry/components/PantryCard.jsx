import React from "react";

const PantryCard = ({ Name , State, City, type , est, mem1, mem2, address , mobile ,email }) => {
    function convertEmailFormat(email) {
      // Use the replace method with regular expressions to replace "(at)" and "[dot]".
      const standardizedEmail = email
        .replace(/\(at\)/g, "@")
        .replace(/\[dot\]/g, ".");

      return standardizedEmail;
    }
  return (
    <div>
      <div className="relative block w-[30rem] h-[19rem] rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-base font-bold text-gray-900 sm:text-xl">
              {Name}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
              {State} | {City}
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-600">{type}</p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://user-images.githubusercontent.com/86917304/278799391-d4a83dfb-0544-4c87-ba25-51edd7279194.png"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[80ch] text-sm text-gray-500">
            <span className="font-semibold">Address : </span>{" "}
            <span>{address}</span>
          </p>
          <p className="max-w-[40ch] text-sm text-gray-500">
            <span className="font-semibold">Member 1 : </span>{" "}
            <span>{mem1}</span>
          </p>
          <p className="max-w-[40ch] text-sm text-gray-500">
            <span className="font-semibold">Member 2 : </span>{" "}
            <span>{mem2}</span>
          </p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col">
            <dt className="text-sm font-medium text-gray-600">Established</dt>
            <dd className="text-xs text-black">{est}</dd>
          </div>

          <div className="flex flex-col">
            <dt className="text-sm font-medium text-gray-600">Mobile</dt>
            <dd className="text-sm text-black">{mobile}</dd>
          </div>

          <div className="flex flex-col">
            <dt className="text-sm font-medium text-gray-600">Email</dt>
            <a
              href={`mailto:${convertEmailFormat(email)}`}
              className="text-sm text-black"
            >
              {convertEmailFormat(email)}
            </a>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PantryCard;
