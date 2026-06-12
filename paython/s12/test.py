import unittest
from tp import app
class Testflask(unittest.TestCase):
    def setUp(self):
        app.config["TESTING"] = True
        self.client = app.test_client()
    def test_affiche(self):
        response = self.client.get("/affiche")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.data.decode("utf-8"),
            "Ma To-Do List"
        )
if __name__ == "__main__":
    unittest.main()        