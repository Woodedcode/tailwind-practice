function FeatureCard({title, description, level}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className="text-sm font-semibold text-blue-600">{`Skill level: ${level}`}</span>
        </div>
    )
}

export default FeatureCard