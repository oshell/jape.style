class Api {
  apiCall = async (route) => {
    const response = await fetch(route);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  };

  test() {
    this.apiCall('/test')
      .then(res => console.log(res.data.value))
      .catch(err => console.log(err));
  }
}

export default new Api();
