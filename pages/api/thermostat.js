export default function handler(req, res) {
    if(req.method == 'POST') {
        if(req.body.setTemp != '0')
        {
            res.status(200).json({ name: 'John Doe2' })
        }
        else{
            res.status(200).json(req.body)
        }
        //if(req.body)

    } else {
        res.status(200).json({ name: 'John Doe' })
    }
  }
  