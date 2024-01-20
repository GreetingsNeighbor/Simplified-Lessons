
const ReflectionList = () => {
    const { data, error, loading } = ();
    if (error) {
        return <div>Error loading reflections</div>;
    }
    if (loading) {
        return <div>Loading</div>;
    }
    return (
        <div>
            {data?.reflections.map((reflection) => (
                <div key={reflection.id}>
                    <h2>{reflection.title}</h2>
                    <p>{reflection.body}</p>
                </div>
            ))}
        </div>
    );
}
export default ReflectionList;