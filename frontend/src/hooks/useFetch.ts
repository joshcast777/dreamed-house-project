export default function useFetch<T>(fetchFunction: () => Promise<Response>): Promise<string | T> {
	return fetchFunction()
		.then((res: Response): Promise<T> => {
			if (!res.ok)
				return res.text().then((text: string): never => {
					throw new Error(text);
				});
			else return res?.json();
		})
		.then((data: T): T => data)
		.catch((err: string): string => err.toString());
}
