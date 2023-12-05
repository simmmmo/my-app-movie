export interface Movie {
	MovieNo: number;
	Title: string;
	RunTime: number;
	DirectorId: number;
	Directors: {
		Name: string;
	};
	// event: { detail: { searchTerm: string } };
}
