package cluster

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"boscoin.io/sebak-test/go/pkg/httpclient"
)

type Cluster struct {
	Peers []string        `json:"peers,omitempty"`
	Nodes map[string]Node `json:"nodes,omitempty"`
	JobId string
}

type Node struct {
	Seed       string   `json:"seed,omitempty"`
	Address    string   `json:"address,omitempty"`
	Abnormal   bool     `json:"abnormal,omitempty"`
	Host       string   `json:"host,omitempty"`
	Port       int32    `json:"port,omitempty"`
	Malicious  bool     `json:"malicious,omitempty"`
	Validators []string `json:"validators,omitempty"`
}

func NewCluster(jobId, clusterInfo string) (*Cluster, error) {
	info := &Cluster{
		JobId: jobId,
	}
	if err := json.Unmarshal([]byte(clusterInfo), info); err != nil {
		return nil, err
	} else {
		return info, nil
	}
}

func (o *Cluster) NodeInfo(nodeId int32) {
	node := o.Nodes[o.Peers[nodeId]]
	client := httpclient.NewClientForTest()
	resp, err := client.Get(fmt.Sprintf("https://%s:%d/", node.Host, node.Port))

	if err != nil {
		panic(err)
	}

	data, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		panic(err)
	}

	fmt.Println(string(data))
}
