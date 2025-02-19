package main

import (
	"fmt"
	"net/http"
)

func main() {
	port := "8080"
	http.ListenAndServe(":"+port, nil)
	fmt.Println("Server is running on port", port)
}
