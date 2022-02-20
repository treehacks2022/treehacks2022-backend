export default function handler(req, res) {
    if(req.method == 'POST') {
        if(isEmpty(req.body)){
            res.status(200).json({ name: 'complete' })
        }
        else
        {
            res.status(201).json({ name: 'error' })
        }
        

    } else {
        res.status(200).json({ name: 'John Doe' })
    }
  }
  