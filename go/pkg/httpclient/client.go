package httpclient

import (
	"net/http"
	"crypto/tls"
)

func NewClientForTest() *http.Client {
	return &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{
				InsecureSkipVerify: true,
			},
		},
	}
}